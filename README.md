# Willam Liu Web NER Challenge

### Overview
For this submission, I have decided to use Flask for the backend and React for the frontend.  For the backend NLP logic, I decided to use the Python module [spaCy](https://spacy.io/).  For the frontend, I used React-Bootstrap because I find their UI library to be lightweight and visually appealing.  

The Flask server runs on port 5000, and React runs on port 3000.  React assumes that Flask will run on a localhost, therefore the fetch url is `http://127.0.0.1:5000`.


## Installation
### Makefile:
As per the submission requirement, you can install all the modules/packages using `make install` and  `make start`, but I listed the individual commands I used below.

### React:
[React-Boostrap](https://react-bootstrap.github.io/)\
`npm install react-bootstrap@next bootstrap@5.0.2`

### Flask:
[spaCy](https://spacy.io/)\
`pip install -U pip setuptools wheel`\
`pip install -U spacy`\
`python -m spacy download zh_core_web_sm`\
`python -m spacy download en_core_web_sm`\
`python -m spacy download fr_core_news_sm`\
`python -m spacy download es_core_news_sm`

## Functionality
In addition to the specified requirements of the submission, I added these additional functionalities below:
* App supports multiple languages (English, French, Spanish, Chinese)
* The named entities are displayed as a table, I think a horizontal table is easier to read/organize


## Contact
> If you have any questions/comments and you want to contact me, listed below is my contact info
* Email: liu994@usc.edu
* LinkedIn: https://www.linkedin.com/in/william-ze-ming/
* Personal Website: https://williamzemingliu.com/
