# Preview all emails at http://localhost:3000/rails/mailers/signup_mailer
class SignupMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/signup_mailer/signup_confirmation
  def signup_confirmation
    # users = User.all
    # User.all.each do |user|
    #   SignupMailer.signup_confirmation(user)
    # end
    SignupMailer.signup_confirmation(User.first)
  end

  # ENV["PASSWORD"]
  # ENV["EMAIL"]

end
