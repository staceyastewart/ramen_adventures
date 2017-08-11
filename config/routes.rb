Rails.application.routes.draw do
  ActiveAdmin.routes(self)
  resources :shops

resources :posts do
  resources :photos, shallow: true
  resources :comments, shallow: true
end

  get "/test", to: "test#index"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/users", to: "users#create"
  get "/users", to: "users#show"
  put "/users", to: "users#update"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
