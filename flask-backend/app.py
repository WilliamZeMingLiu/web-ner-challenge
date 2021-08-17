#Flask imports
from flask import Flask
from flask import request
from flask import jsonify
from flask_cors import CORS, cross_origin
#spaCy imports
import spacy
from spacy import displacy
english = spacy.load("en_core_web_sm")
chinese = spacy.load("zh_core_web_sm")
french = spacy.load("fr_core_news_sm")
spanish = spacy.load("es_core_news_sm")


#Flask/CORS setup
app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"


@app.route("/spacy", methods=['POST'])
@cross_origin()
def spacy():
    req = request.json
    text = req.get('data')
    #Get language 
    lang = req.get('lang')

    if lang == "Spanish":
        doc = spanish(text)
    elif lang == "Chinese":
        doc = chinese(text)
    elif lang == "French":
        doc = french(text)
    else:
        doc = english(text)

    entities=[]

    unique = {
        "PERSON": set(),
        "ORG": set(),
        "GPE": set(),
        "LOC": set(),
    }

    for ent in doc.ents:
        if (ent.label_ == "PERSON" or ent.label_ == "ORG" or
            ent.label_ == "GPE" or ent.label_ == "LOC"):
            if ent.text not in unique.get(ent.label_):
                entities.append([ent.text, ent.label_])
                unique.get(ent.label_).add(ent.text)

    return jsonify(entities)