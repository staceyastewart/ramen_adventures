#curl -X GET -H "Authorization: Token token= your token here " http://localhost:3000/test
class TestController < ApiController
  include Response
  before_action :require_login

  def index
    json_response(spots: "List of places to work in coffee shops")
  end

end
