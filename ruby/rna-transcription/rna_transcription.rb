module BookKeeping
  VERSION = 4
end

class Complement
  def self.of_dna (dna_strand)
    rna = []
    d = dna_strand.split("")
    d.each do |n|
      case n
      when "G"
        rna << "C"
      when "C"
        rna << "G"
      when "T"
        rna << "A"
      when "A"
        rna << "U"
      else
        return ""
      end
    end
  rna_complement = rna.join("")
  end
end
