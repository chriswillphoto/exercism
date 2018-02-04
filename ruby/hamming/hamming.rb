module BookKeeping
  VERSION=3
end

class Hamming
  def self.compute(strand1, strand2)
    differences = 0
    raise ArgumentError if strand1.length != strand2.length
    (0..strand1.length).each do |i|
      if strand1.chars[i] != strand2.chars[i]
        differences += 1
      end
    end
    return differences
  end
end
