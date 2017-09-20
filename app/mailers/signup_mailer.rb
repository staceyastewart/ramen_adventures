class SignupMailer < ApplicationMailer
  default from: "ramenamerican@gmail.com"

  def signup_confirmation(user)
    @user = user
    attachments.inline['ramen_adventures_email.jpg'] = File.read('app/assets/images/ramen_adventures_email.jpg')
    mail to: @user.email, subject: "Ramen Adventures Signup Confirmation"
  end
end
