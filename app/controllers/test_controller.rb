#curl -X GET -H "Authorization: Token token= your token here " http://localhost:3000/test
class TestController < ApiController
  before_action :require_login

  def index
    render json: {spots: "List of places to work in coffee shops"}
  end

end
