# Preview all emails at http://localhost:3000/rails/mailers/user_mailer
class UserMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/user_mailer/post_mailer
  def post_mailer
    @unsubscribe = Rails.application.message_verifier(:unsubscribe).generate(User.first.id)
    UserMailer.post_mailer(User.first, Post.first, @unsubscribe)
  end

end
