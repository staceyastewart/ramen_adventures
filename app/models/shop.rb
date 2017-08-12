class Shop < ApplicationRecord
    has_many :usershops
    has_many :posts
end
