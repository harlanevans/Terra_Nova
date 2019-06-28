require 'rails_helper'

RSpec.describe Reservation, type: :model do

  describe 'attributes' do
    it 'has adults' do
      adults = 1
      reservation = Reservation.create(adults: adults)
      expect(reservation.adults).to eq(adults)
    end
  end

  describe 'attributes' do
    it 'has kids' do
      kids = 1
      reservation = Reservation.create(kids: kids)
      expect(reservation.kids).to eq(kids)
    end
  end

  describe 'attributes' do
    it 'has a start date' do
      start_date = 2019, 5, 5
      reservation = Reservation.create(start_date: start_date)
      expect(reservation.start_date).to eq(start_date)
    end
  end

  describe 'attributes' do
    it 'has an end date' do
      end_date = 2019, 5, 7
      reservation = Reservation.create(end_date: end_date)
      expect(reservation.end_date).to eq(end_date)
    end
  end

  describe "validations" do
    before(:each) do
    @reservation = Reservation.create(adults: 1, kids: 1, start_date: 2019-5-5, end_date: 2019-5-7)
    it { should validate_presence_of :adults }
    it { should validate_presence_of :kids }
    it { should validate_presence_of :start_date }
    it { should validate_presence_of :end_date }
  
  
    describe "association" do
      it { should belong_to(:cabin) }
      # it { should have_many(:students).dependent(:destroy) }
    end
  
  end
end

end
