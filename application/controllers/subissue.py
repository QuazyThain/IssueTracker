from controllers.controller import Controller
from models.subissues import Subissues


class Subissue(Controller):
    _subissues = None

    def __init__(self):
        super(Subissue, self).__init__()
        self._subissues = Subissues()

    def get(self, id):
        return self._subissues.get(id)

    def add(self, data):
        return self._subissues.add(data)

    def edit(self, id, data):
        return self._subissues.edit(id, data)

    def delete(self, id):
        return self._subissues.delete(id)

    def all(self, filter):
        return self._subissues.all(filter)
