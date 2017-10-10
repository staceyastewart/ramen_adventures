Rails.application.routes.draw do

devise_for :admin_users, ActiveAdmin::Devise.config
ActiveAdmin.routes(self)

resources :posts do
  resources :photos, shallow: true
  resources :comments, shallow: true
end

resources :shops do
  resources :usershops, only: [:create], shallow: true
end

resources :users do
  resources :usershops, except: [:create, :update]
end

  get "/test", to: "test#index"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/search" => "search#index"

  root to: "root#index"
  


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end


