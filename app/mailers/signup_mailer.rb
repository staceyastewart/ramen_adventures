class SignupMailer < ApplicationMailer
  default from: "ramenamerican@gmail.com"

  def signup_confirmation(user)
    @user = user

    mail to: user.email, subject: "Ramen Adventures Signup Confirmation"
  end
end
