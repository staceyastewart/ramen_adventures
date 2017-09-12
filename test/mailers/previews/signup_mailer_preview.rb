# Preview all emails at http://localhost:3000/rails/mailers/signup_mailer
class SignupMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/signup_mailer/signup_confirmation
  def signup_confirmation
    SignupMailer.signup_confirmation
  end

end
