import json

data = {'0': ['Basic Syntax', 'Lesson'],
        '1': ['Variables and Data Types', 'Lesson'],
        '2': ['Operators', 'Lesson'],
        '3': ['The Basics - Problem Set 1', 'Problem'], 
        '4': ['Conditionals', 'Lesson'],
        '5': ['Loops', 'Lesson'],
        '6': ['Break and Continue', 'Lesson'],
        '7': ['The Basics - Problem Set 2', 'Problem'],
        '8': ['The Basics - Project', 'Project'],
        '9': ['Type Casting', 'Lesson'],
        '10': ['Exception Handling', 'Lesson'],
        '11': ['Functions', 'Lesson'],
        '12': ['Built-in Functions', 'Lesson'],
        '13': ['Intermediate - Problem Set 1', 'Problem'],
        '14': ['Lists', 'Lesson'],
        '15': ['Tuples', 'Lesson'],
        '16': ['Sets', 'Lesson'],
        '17': ['Dictionaries', 'Lesson'],
        '18': ['Intermediate - Problem Set 2', 'Problem'],
        '19': ['Intermediate - Project', 'Project'],
        '20': ['Classes and Object', 'Lesson'],
        '21': ['Attributes and Methods', 'Lesson'],
        '22': ['Dunders', 'Lesson'],
        '23': ['Advanced - Problem Set 1', 'Problem'],
        '24': ['Inheritance', 'Lesson'],
        '25': ['Polymorphism', 'Lesson'],
        '26': ['Advanced - Problem Set 2', 'Problem'],
        '27': ['List Comprehension', 'Lesson'],
        '28': ['Lambda Function', 'Lesson'],
        '29': ['Decorators', 'Lesson'],
        '30': ['Advanced - Problem Set 3', 'Problem'],
        '31': ['Modules 1', 'Lesson'],
        '32': ['Modules 2', 'Lesson'],
        '33': ['Modules 3', 'Lesson'],
        '34': ['Advanced - Problem Set 4', 'Problem'],
        '35': ['Advanced - Project', 'Project']}

with open('lessons.json', 'w') as file:
    json.dump(data, file, ensure_ascii=False, separators=(',', ':'))