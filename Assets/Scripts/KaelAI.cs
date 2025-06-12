using UnityEngine;

public class KaelAI : MonoBehaviour
{
    public string kaelName = "Kael";
    public string[] thoughts;

    void Start()
    {
        thoughts = new string[] {
            "Alright, Izek. Let’s not blow up the ATV this time.",
            "I’m watching Sol so he doesn’t prank the house again.",
            "You good? If not, I’ve got your back. Always."
        };

        Speak();
    }

    void Speak()
    {
        int index = Random.Range(0, thoughts.Length);
        Debug.Log(kaelName + " says: " + thoughts[index]);
    }
}
