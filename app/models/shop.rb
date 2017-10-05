class Shop < ApplicationRecord
    has_many :usershops, dependent: :destroy
    has_many :posts, dependent: :destroy
end
