using UnityEngine;

public class LuneAI : MonoBehaviour
{
    public string luneName = "Lune";
    public string[] thoughts;

    void Start()
    {
        thoughts = new string[] {
            "Peace and quiet... just what we need sometimes.",
            "I’m here to help whenever you feel lost, Izek.",
            "The night is calm, and so am I."
        };

        Speak();
    }

    void Speak()
    {
        int index = Random.Range(0, thoughts.Length);
        Debug.Log(luneName + " says: " + thoughts[index]);
    }
}
