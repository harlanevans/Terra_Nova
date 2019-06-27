require 'rails_helper'

RSpec.describe Reservation, type: :model do

  describe 'attributes' do
    it 'has adults' do
      adults = 1
      reservation = Reservation.create(adults: adults)
      expect(reservation.adults).to eq(adults)
    end
  end

end
