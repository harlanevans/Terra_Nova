Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :cabins do
   
      get '/braintree_token', to: 'braintree#token'
      post '/payment', to: 'braintree#payment'
    end
       resources :reservations
      get "find_reservations", to: "reservations#find_reservations"
    
  end

end
