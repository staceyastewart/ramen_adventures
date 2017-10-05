class UserPolicy < ApplicationPolicy
    def show?
        user == record
    end

    def update?
        user == record
    end

    def destroy?
        user == record
    end
end
