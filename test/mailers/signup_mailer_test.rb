require 'test_helper'

class SignupMailerTest < ActionMailer::TestCase
  test "signup_confirmation" do
    mail = SignupMailer.signup_confirmation
    assert_equal "Signup confirmation", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
