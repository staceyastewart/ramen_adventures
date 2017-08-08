class ApiController < ActionController::API
    include ActionController::HttpAuthentication::Token::ControllerMethods
    include Pundit
    include Response

    def require_login
        authenticate_token || render_unauthorized("Access Denied")
    end

    def current_user
        @current_user ||= authenticate_token
    end

    protected

    def render_unauthorized(message)
        errors = { error: message }
        json_response(errors)
    end

    private

    def authenticate_token
        authenticate_with_http_token do |token, options|
            User.find_by(auth_token: token)
        end
    end

end
