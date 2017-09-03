ActiveAdmin.register Post do
    menu priority: 1

    index as: :blog do
        title :id
        body :content
    end

    form do |f|
        inputs "Details" do
            input :best_of
            input :shop
            input :date, as: :datepicker
            input :content
            input :photos
        end
    end

    permit_params :content, :date, :shop_id, :best_of, :photos
end
