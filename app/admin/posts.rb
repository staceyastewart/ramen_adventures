ActiveAdmin.register Post do
    permit_params :content, :date, :shop_id, :photos, :best_of
end
