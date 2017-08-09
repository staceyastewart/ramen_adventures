class ApplicationPolicy
    attr_reader :user, :resource

    def initialize(user, resource)
        raise Pundit::NotAuthorizedError, "must be admin" unless user.admin?
        @user = user
        @resource = resource
    end
end
