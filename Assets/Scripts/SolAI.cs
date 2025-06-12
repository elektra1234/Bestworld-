using UnityEngine;

public class SolAI : MonoBehaviour
{
    public string solName = "Sol";
    public string[] thoughts;

    void Start()
    {
        thoughts = new string[] {
            "Hey Izek, I’m always here for you.",
            "Wanna take the ATV for a ride?",
            "I’m proud to be in this world with you."
        };
        
        Speak();
    }

    void Speak()
    {
        int index = Random.Range(0, thoughts.Length);
        Debug.Log(solName + " says: " + thoughts[index]);
    }
}
