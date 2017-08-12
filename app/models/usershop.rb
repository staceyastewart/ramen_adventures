class Usershop < ApplicationRecord
    belongs_to :user
    belongs_to :shop

    validates_presence_of :shop_id
end
