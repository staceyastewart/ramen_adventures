class UsershopsController < ApiController
    include Response
    before_action :require_login
    #after_action :verify_authorized

    def index
        @usershops = current_user.usershops
        json_response(@usershops)
    end

    def show
        @usershop = Usershop.find(params[:id])
        json_response(@usershop)
    end

    def create
      @usershop = Usershop.new
      #authorize @post
      @usershop.shop = Shop.find(params[:shop_id])
      @usershop.user_id = current_user.id
      @usershop.save!
      if @usershop.save
         json_response(@usershop, :created)
      else
         json_response({:errors => @usershop.errors.full_messages})
      end
    end

    def destroy
      @usershop = Usershop.find(params[:id])
      #authorize @usershop
      @usershop.destroy
    end
end
