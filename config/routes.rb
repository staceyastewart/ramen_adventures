Rails.application.routes.draw do
  devise_for :users, :controllers => { sessions: 'registrations_controller' }

  resources :shops

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
