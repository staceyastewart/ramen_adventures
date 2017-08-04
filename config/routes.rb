Rails.application.routes.draw do
  resources :shops

  get "/test", to: "test#index"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/users", to: "users#create"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
