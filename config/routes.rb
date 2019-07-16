Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :cabins do
      resources :reservations
         get '/braintree_token', to: 'braintree#token'
         post '/payment', to: 'braintree#payment'
    end
  end
end
