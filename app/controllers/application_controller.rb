class ApplicationController < ActionController::Base
    include Pundit
    include Response
    protect_from_forgery with: :null_session

    rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

    private

    def user_not_authorized
        json_response("You are not authorized to perform this action.")
    end
end
