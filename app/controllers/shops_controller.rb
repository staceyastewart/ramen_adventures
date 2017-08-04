class ShopsController < ApplicationController
    include Response
    include ExceptionHandler

    before_action :require_login

    def index
        @shops = Shop.all
        json_response(@shops)
    end

    def show
        @shop = Shop.find(params[:id])
        json_response(@shop)
    end

    def create
        @shop = Shop.create!(shop_params)
        json_response(@shop, :created)
    end

    def update
        @shop = Shop.update(shop_params)
        head :no_content
    end

    def destroy
        @shop = Shop.find(params[:id])
        @shop.destroy
    end

    private

    def shop_params
        json_params = ActionController::Parameters.new( JSON.parse(request.body.read) )
        return json_params.require(:shop).permit(:name, :address, :recommended)
    end
end
