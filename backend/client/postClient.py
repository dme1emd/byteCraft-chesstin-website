import requests
import json


url = 'http://localhost:8000/api/'
data = {

    "firstName": "fq tq",
    "lastName": "asdads",
    "email": " evtv@gmail.com",
    "yearInSchool": "1cp",
    "elo": 1700,
    "lichessUsername": "bomasbaka",
    "motivation": "testingiansgas",
    "workshops": ["workshop3","workshop1"]
}
data = {
    "firstName": "fq tq",
    "lastName": "asdads",
    "email": " evtv2@gmail.com",
    "elo": 1700,
    "motivation": "testingiansgas",
    "origin":"estin",

}

response = requests.post(url,json = data)


# {
#
#     "firstName": "fq tq",
#     "lastName": "asdads",
#     "email": " evtv@gmail.com",
#     "elo": 1700,
#     "motivation": "testingiansgas",
#     "origin":"estin",
#
# }