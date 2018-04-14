import json
from pprint import pprint
import random

data = json.load(open('rn.json'))

result = list()
for j in range(3):
    result.append([])
    for i in data["features"]:
        result[j].append([str(int(i["properties"]["id"])), random.randint(1, 500)])

file = open("dados.json", "w") 
file.write(str(result))
file.close() 
