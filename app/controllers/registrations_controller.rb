class RegistrationsController < Devise::RegistrationsController

private

  def sign_up_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :username, :country, :city)
  end

  def account_update_params
    json_params = ActionController::Parameters.new(JSON.parse(request.body.read) )
    return json_params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :current_password, :username, :country, :city)
  end
end
