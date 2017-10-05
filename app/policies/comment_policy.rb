class CommentPolicy < ApplicationPolicy
    def index?
        true
    end

    def create?
        user.present?
    end

    def update?
        return true if user.present? && user == record.user
    end
end
