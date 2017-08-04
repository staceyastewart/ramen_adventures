class UsersController < ApiController
    before_action :require_login, except: [:create]

    def create
        begin
            @user = User.new(user_params)
            @user.save
            json_response({ token: @user.auth_token })
        end
    end

    def show
        begin
            @user = User.find_by_auth_token(params[:id])
            @response = { user: { name: @user.first_name, email: @user.email } }
            json_response(@response)
        end
    end

    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password)
    end  
end
