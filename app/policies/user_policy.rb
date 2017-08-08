class UserPolicy < ApplicationPolicy
    def update?
        user == resource
    end
end
