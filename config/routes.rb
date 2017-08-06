Rails.application.routes.draw do
  ActiveAdmin.routes(self)
  resources :shops
  resources :posts

  get "/test", to: "test#index"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/users", to: "users#create"
  get "/users", to: "users#show"
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
