class UserMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.post_mailer.subject
  #
  def post_mailer(user)
    @user = user

    mail to: user.email, subject: "Ramen Adventures New Post!"
  end
end
