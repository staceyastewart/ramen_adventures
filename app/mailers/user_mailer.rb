class UserMailer < ApplicationMailer
  default from: "ramenamerican@gmail.com"

  def post_mailer(user, post, unsubscribe)
    @user = user
    @post = post
    @unsubscribe = unsubscribe
    mail to: @user.email, subject: "Ramen Adventures New Post!"
  end
end
