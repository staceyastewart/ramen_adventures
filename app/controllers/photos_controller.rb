class PhotosController < ApiController
    include Response

    #before_action :require_login, only: [:create, :update, :destroy]
    #after_action :verify_authorized, except: [:index, :show]

    def index
        @photos = Photo.where(post_id: Post.find(params[:post_id]))
        json_response(@photos)
    end

    def show
        @photo = Photo.find(params[:id])
        json_response(@photo)
    end

    def create
        @photo = Photo.new(photo_params)
        #authorize @photo
        @photo.post = Post.find(params[:post_id])
        @photo.save!
        if @photo.save
            json_response(@photo, :created)
        else
            json_response({:errors => @photo.errors.full_messages})
        end
    end

    def update
        @photo = Photo.find(params[:id])
        #authorize @photo
        @photo.update_attributes(photo_params)

        if @photo.update_attributes(photo_params)
            json_response(@photo)
        else
            json_response( {:errors => @photo.errors.full_messages })
        end
    end

    def destroy
        @photo = Photo.find(params[:id])
        #authorize @photo
        @photo.destroy
    end

    private

    def photo_params
        json_params = ActionController::Parameters.new( JSON.parse(request.body.read) )
        return json_params.require(:photo).permit(:link, :posts_id)
    end
end
