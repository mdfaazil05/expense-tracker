package com.example.expensetrack;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.codetrixstudio.capacitor.GoogleAuth.GoogleAuth;
import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Register the GoogleAuth plugin
        this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
            add(GoogleAuth.class);
        }});
    }
}
