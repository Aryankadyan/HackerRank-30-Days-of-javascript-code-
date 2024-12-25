class Difference{
    private $elements=array();
    public $maximumDifference;

// Write your code here
 public function __construct($elements){
        $this->elements = $elements;
    }
    
    public function computeDifference(){
        $maxDifference = PHP_INT_MIN;
        $length  = count($this->elements);
        
        for ($i=0; $i<$length; $i++ ){
            for ($j = $i+1; $j<$length; $j++){
                $difference = abs($this->elements[$i] - $this->elements[$j]);
                
                if ($difference > $maxDifference){
                   $maxDifference =  $difference;
                }
            }
        }
        print_r($maxDifference);
    }
} //End of Difference class