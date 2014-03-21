from controllers.controller import Controller
from models.users import Users


class User(Controller):
    _users = None

    def __init__(self):
        super(User, self).__init__()
        self._users = Users()

    def get(self, id):
        data = self._users.get(id)
        if "password" in data:
            del data["password"]
        return data

    def add(self, data):
        return self._users.add(data)

    def edit(self, id, data):
        return self._users.edit(id, data)

    def delete(self, id):
        return self._users.delete(id)

    def all(self, filter):
        data = self._users.all(filter)
        for item in data:
            if "password" in item:
                del item["password"]
        return data

    def current(self):
        return dict()

    def signin(self, data):
        return self.current()

    def signout(self):
        return self.current()
