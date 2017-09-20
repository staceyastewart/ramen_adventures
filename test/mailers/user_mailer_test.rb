require 'test_helper'

class UserMailerTest < ActionMailer::TestCase
  test "post_mailer" do
    mail = UserMailer.post_mailer
    assert_equal "Post mailer", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
