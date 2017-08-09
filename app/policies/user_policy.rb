class UserPolicy < ApplicationPolicy
    def show?
        user == resource
    end
    
    def update?
        user == resource
    end
end
