import axios from 'axios';
const initialUserData = {
    "results": [
        {
            "gender": "",
            "name": {
                "title": "",
                "first": "",
                "last": ""
            },
            "location": {
                "street": {
                    "number": 9193,
                    "name": "Bølersvingen"
                },
                "city": "Eidbukta",
                "state": "Hedmark",
                "country": "Norway",
                "postcode": "3534",
                "coordinates": {
                    "latitude": "53.7794",
                    "longitude": "-136.5952"
                },
                "timezone": {
                    "offset": "-1:00",
                    "description": "Azores, Cape Verde Islands"
                }
            },
            "email": "luis.hasan@example.com",
            "login": {
                "uuid": "846e1251-71cf-413f-a6b9-83c7a145fa20",
                "username": "sadmeercat576",
                "password": "fusion",
                "salt": "CfU9fo0k",
                "md5": "31929ce2d11871a68e438098a141e40c",
                "sha1": "177e5479fa85cbec8ea43244b61cfacffc16d2f0",
                "sha256": "daccc6b0849ff7401550f5d22938a8c94d445a8c4029fbc8f267c8f9833c7e7f"
            },
            "dob": {
                "date": "1957-07-21T11:02:51.486Z",
                "age": 63
            },
            "registered": {
                "date": "2016-03-07T19:29:01.619Z",
                "age": 4
            },
            "phone": "60239610",
            "cell": "93536523",
            "id": {
                "name": "FN",
                "value": "21075746749"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/47.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/47.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/47.jpg"
            },
            "nat": "NO"
        }
    ],
    "info": {
        "seed": "56837179fdb8d33e",
        "results": 1,
        "page": 1,
        "version": "1.3"
    }
};
export default {
    random() {
        return axios.get('https://randomuser.me/api/');
    },
};
