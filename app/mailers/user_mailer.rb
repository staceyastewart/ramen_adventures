class UserMailer < ApplicationMailer
  default from: "ramenamerican@gmail.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.post_mailer.subject
  #
  def post_mailer(user, post)
    @user = user
    @post = post
    mail to: @user.email, subject: "Ramen Adventures New Post!"
  end
end
