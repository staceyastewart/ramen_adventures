class SignupMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.signup_mailer.signup_confirmation.subject
  #
  def signup_confirmation
    @greeting = "Hi"

    mail to: "to@example.org"
  end
end
